export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i

export function getProbability(percents) {
  return ((Math.floor(Math.random() * 1000) + 1) < percents * 10);
}

export function getRandInterval(min, max) {
  return (Math.random() * (max - min) + min);
}
export function draw() {
  universe.clearRect(0, 0, width, height);

  var starsLength = stars.length;

  for (var i = 0; i < starsLength; i++) {
    var star = stars[i];
    star.move();
    star.fadeIn();
    star.fadeOut();
    star.draw();
  }

  window.requestAnimationFrame(draw);
}
export class Star {
  constructor(universe, width, height, first, speedCoeff, giantColor, starColor, cometColor) {
    this.universe = universe
    this.width = width
    this.height = height
    this.first = first
    this.speedCoeff = speedCoeff
    this.giantColor= giantColor
    this.starColor =  starColor 
    this.cometColor = cometColor
  }
  reset() {
    this.giant = getProbability(3);
    this.comet = this.giant || this.first ? false : getProbability(10);
    this.x = getRandInterval(0, this.width - 10);
    this.y = getRandInterval(0, this.height);
    this.r = getRandInterval(1.1, 2.6);
    this.dx = getRandInterval(this.speedCoeff, 6 * this.speedCoeff) + (this.comet + 1 - 1) * this.speedCoeff * getRandInterval(50, 120) + this.speedCoeff * 2;
    this.dy = -getRandInterval(this.speedCoeff, 6 * this.speedCoeff) - (this.comet + 1 - 1) * this.speedCoeff * getRandInterval(50, 120);
    this.fadingOut = null;
    this.fadingIn = true;
    this.opacity = 0;
    this.opacityTresh = getRandInterval(.2, 1 - (this.comet + 1 - 1) * .4);
    this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * .001;
  }

  fadeIn () {
    if (this.fadingIn) {
      this.fadingIn = this.opacity > this.opacityTresh ? false : true;
      this.opacity += this.do;
    }
  }

  fadeOut() {
    if (this.fadingOut) {
      this.fadingOut = this.opacity < 0 ? false : true;
      this.opacity -= this.do / 2;
      if (this.x > this.width || this.y < 0) {
        this.fadingOut = false;
        this.reset();
      }
    }
  }

  draw () {
    this.universe.beginPath();
    if (this.giant) {
      this.universe.fillStyle = 'rgba(' + this.giantColor + ',' + this.opacity + ')';
      this.universe.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
    } else if (this.comet) {
      this.universe.fillStyle = 'rgba(' + this.cometColor + ',' + this.opacity + ')';
      this.universe.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);

      //comet tail
      for (let i = 0; i < 30; i++) {
        this.universe.fillStyle = 'rgba(' + this.cometColor + ',' + (this.opacity - (this.opacity / 20) * i) + ')';
        this.universe.rect(this.x - this.dx / 4 * i, this.y - this.dy / 4 * i - 2, 2, 2);
        this.universe.fill();
      }
    } else {
      this.universe.fillStyle = 'rgba(' + this.starColor + ',' + this.opacity + ')';
      this.universe.rect(this.x, this.y, this.r, this.r);
    }

    this.universe.closePath();
    this.universe.fill();
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.fadingOut === false) {
      this.reset();
    }
    if (this.x > this.width - (this.width / 4) || this.y < 0) {
      this.fadingOut = true;
    }
  }
}
export class Rain {
  constructor(canContent, w, h) {
    this.canContent = canContent
    this.x = this.random(0, w)
    this.y = 0
    this.v = this.random(4, 5)
    this.h = this.random(0.8 * h, 0.9 * h)
    this.r = 1//初始半径
    this.vr = this.random(0.4, 0.6) //半径增长率
    this.a = 1//初始透明度
    this.va = 0.96 // 透明度变化系数
    this.w = w
    this.h = h
  }
  init() {
    this.x = this.random(0, this.w)
    this.y = 0
    this.v = this.random(4, 5)
    this.h = this.random(0.8 * this.h, 0.9 * this.h)
    this.r = 1//初始半径
    this.vr = this.random(0.4, 0.6) //半径增长率
    this.a = 1//初始透明度
    this.va = 0.96 // 透明度变化系数
  }
  random(min, max) {
    return Math.random() * (max - min) + min
  }
  draw() {
    if (this.y < this.h) {
      this.canContent.fillStyle = "#33ffff" //拿一只画实心图形的红色的笔
      this.canContent.fillRect(this.x, this.y, 2, 10) // 画一个实心的矩形
    } else {
      this.canContent.strokeStyle = "rgba(51,255,255," + this.a + ")"
      this.canContent.beginPath() //重新拿起笔
      this.canContent.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      this.canContent.stroke();
    }
    
  }
  move() {
    if (this.y < this.h) {
      this.y += this.v
    } else {
      if (this.a > 0.02) {
        this.r += this.vr
        if(this.r > 50){
          this.a *= this.va
        }
      } else {
        this.init()
      }
    }
      this.draw()
    }
}

export function normalize (path) {
  return decodeURI(path)
    .replace(hashRE, '')
    .replace(extRE, '')
}

export function getHash (path) {
  const match = path.match(hashRE)
  if (match) {
    return match[0]
  }
}

export function isExternal (path) {
  return outboundRE.test(path)
}

export function isMailto (path) {
  return /^mailto:/.test(path)
}

export function isTel (path) {
  return /^tel:/.test(path)
}

export function ensureExt (path) {
  if (isExternal(path)) {
    return path
  }
  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized)) {
    return path
  }
  return normalized + '.html' + hash
}

export function isActive (route, path) {
  const routeHash = route.hash
  const linkHash = getHash(path)
  if (linkHash && routeHash !== linkHash) {
    return false
  }
  const routePath = normalize(route.path)
  const pagePath = normalize(path)
  return routePath === pagePath
}

export function resolvePage (pages, rawPath, base) {
  if (isExternal(rawPath)) {
    return {
      type: 'external',
      path: rawPath
    }
  }
  if (base) {
    rawPath = resolvePath(rawPath, base)
  }
  const path = normalize(rawPath)
  for (let i = 0; i < pages.length; i++) {
    if (normalize(pages[i].regularPath) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: ensureExt(pages[i].path)
      })
    }
  }
  console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`)
  return {}
}

function resolvePath (relative, base, append) {
  const firstChar = relative.charAt(0)
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  const stack = base.split('/')

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop()
  }

  // resolve relative path
  const segments = relative.replace(/^\//, '').split('/')
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === '..') {
      stack.pop()
    } else if (segment !== '.') {
      stack.push(segment)
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('')
  }

  return stack.join('/')
}

/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */
export function resolveSidebarItems (page, regularPath, site, localePath) {
  const { pages, themeConfig } = site

  const localeConfig = localePath && themeConfig.locales
    ? themeConfig.locales[localePath] || themeConfig
    : themeConfig

  const pageSidebarConfig = page.frontmatter.sidebar || localeConfig.sidebar || themeConfig.sidebar
  if (pageSidebarConfig === 'auto') {
    return resolveHeaders(page)
  }

  const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar
  if (!sidebarConfig) {
    return []
  } else {
    const { base, config } = resolveMatchingConfig(regularPath, sidebarConfig)
    return config
      ? config.map(item => resolveItem(item, pages, base))
      : []
  }
}

/**
 * @param { Page } page
 * @returns { SidebarGroup }
 */
function resolveHeaders (page) {
  const headers = groupHeaders(page.headers || [])
  return [{
    type: 'group',
    collapsable: false,
    title: page.title,
    path: null,
    children: headers.map(h => ({
      type: 'auto',
      title: h.title,
      basePath: page.path,
      path: page.path + '#' + h.slug,
      children: h.children || []
    }))
  }]
}

export function groupHeaders (headers) {
  // group h3s under h2
  headers = headers.map(h => Object.assign({}, h))
  let lastH2
  headers.forEach(h => {
    if (h.level === 2) {
      lastH2 = h
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(h)
    }
  })
  return headers.filter(h => h.level === 2)
}

export function resolveNavLinkItem (linkItem) {
  return Object.assign(linkItem, {
    type: linkItem.items && linkItem.items.length ? 'links' : 'link'
  })
}

/**
 * @param { Route } route
 * @param { Array<string|string[]> | Array<SidebarGroup> | [link: string]: SidebarConfig } config
 * @returns { base: string, config: SidebarConfig }
 */
export function resolveMatchingConfig (regularPath, config) {
  if (Array.isArray(config)) {
    return {
      base: '/',
      config: config
    }
  }
  for (const base in config) {
    if (ensureEndingSlash(regularPath).indexOf(encodeURI(base)) === 0) {
      return {
        base,
        config: config[base]
      }
    }
  }
  return {}
}

function ensureEndingSlash (path) {
  return /(\.html|\/)$/.test(path)
    ? path
    : path + '/'
}

function resolveItem (item, pages, base, groupDepth = 1) {
  if (typeof item === 'string') {
    return resolvePage(pages, item, base)
  } else if (Array.isArray(item)) {
    return Object.assign(resolvePage(pages, item[0], base), {
      title: item[1]
    })
  } else {
    if (groupDepth > 3) {
      console.error(
        '[vuepress] detected a too deep nested sidebar group.'
      )
    }
    const children = item.children || []
    if (children.length === 0 && item.path) {
      return Object.assign(resolvePage(pages, item.path, base), {
        title: item.title
      })
    }
    return {
      type: 'group',
      path: item.path,
      title: item.title,
      sidebarDepth: item.sidebarDepth,
      children: children.map(child => resolveItem(child, pages, base, groupDepth + 1)),
      collapsable: item.collapsable !== false
    }
  }
}
