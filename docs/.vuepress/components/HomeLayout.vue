<template>
  <div>
    <header>sfsfsf</header>
  </div>
</template>

<script>
// import { ensureExt } from '../util'

export default {
  name: 'Home',

  data() {
    return {
      isDivider: false
    }
  },
  methods:{
    isExtlink(path) {
      const Reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
      return Reg.test(path)
    },
    link(url) {
      url = typeof url === 'undefined' ? '' : url
      let _url = ensureExt(url)
      _url = _url.length === 5 && _url === '.html' ? '' : _url
      return _url
    }
  },
  mounted() {
    if (this.data.footerWrap && this.data.footerWrap.length) {
      this.isDivider = true
    }
  },
  computed: {
    data() {
      return this.$page.frontmatter
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },

    footerColumn() {
      if (this.data.footerWrap && this.data.footerWrap.length) {
        if (this.data.footerColumn !== null || this.data.footerColumn > 0) {
          if (this.data.footerColumn > 4) {
            console.error('The footer column supports a maximum of 4 columns')
            return 4
          } else {
            let _footerColumn = this.data.footerColumn
            _footerColumn = 24 / _footerColumn
            return _footerColumn
          }
        } else {
          console.error('footerColumn needs to be set and cannot be 0 or empty')
        }
      }
    }
  }
}
</script>

<style lang="less">
// @import '../styles/palette.less';

.home {
  // padding: @navbarHeight 2rem 0;
  // max-width: @homePageWidth;
  margin: 0px auto;
  display: block;
  margin-bottom: 40px;

  .hero {
    text-align: center;

    .hero-logo {
      max-width: 100%;
      max-height: 180px;
      display: block;
      margin: 5rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1,
    .description,
    .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.5rem;
      line-height: 1.3;
      color: #949494;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      // background-color: @accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      // border-bottom: 1px solid darken(@accentColor, 10%);

      // &:hover {
      //   background-color: lighten(@accentColor, 10%);
      // }
    }
  }

  .features {
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    font-size: 1rem;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      // color: lighten(@textColor, 10%);
    }

    p {
      // color: lighten(@textColor, 25%);
      margin-top: 0.5rem;
    }
  }

  .ant-btn-round.ant-btn-lg {
    font-size: 18px;
    height: 3rem;
    padding: 0 1.5rem;
  }
  .pre-btn{
    margin-left: .5rem;
  }
}

.footer {
  clear: both;
  font-size: .875rem;
  background-color: #000;
  position: relative;
  color: rgba(255, 255, 255, 0.4);
  .footer-container {
    max-width: 1100px;
    padding: 5rem 0;
    margin: 0 auto;

    h2 {
      position: relative;
      margin: 0 auto 1.5rem;
      padding: 0;
      font-weight: 500;
      font-size: 16px;
      color: #fff;
      text-align: left;
    }
    .add-bottom{
      > div{
        > div{
          margin-bottom: 1.875rem;
        }
      }
    }

    .footer-item {
      margin: 0.75rem 0;
      a {
        color: #fff;
      }
      // a:hover {
      //   color: @accentColor;
      // }
      .footer-item-separator {
        margin: 0 0.3em;
      }
    }
  }
  .footer-bottom {
    max-width: 1200px;
    text-align: center;
    padding: 16px 0;
    margin: 0 auto;
    line-height: 32px;
    overflow: hidden;
    font-size: 16px;
    font-variant: tabular-nums;

    &.footer-divider {
      border-top: 1px solid rgba(255, 255, 255, 0.25);
    }
  }
}

// @media (max-width: @MQMobile) {
//   .home {
//     .hero {
//       .hero-logo {
//         max-height: 150px;
//         margin: 2rem auto 1.2rem;
//       }
//     }
    
//     .features {
//       flex-direction: column;
//     }

//     .feature {
//       max-width: 100%;
//       padding: 0 1rem;
//       margin: .5rem auto;
//       text-align: center;
//     }
//   }
//   .footer-container {
//     text-align: center;

//     h2 {
//       text-align: center !important;
//     }
//     .add-bottom{
//       > div{
//         &:last-child{
//           > div{
//             margin-bottom: 0;
//           }
//         }
//       }
//     }
//   }
// }

// @media (max-width: @MQMobileNarrow) {
//   .home {
//     padding-left: 1.5rem;
//     padding-right: 1.5rem;
//     padding-top: 2.8rem;

//     .hero {
//       .hero-logo {
//         max-height: 150px;
//         margin: 2rem auto 1.2rem;
//       }

//       h1 {
//         font-size: 2rem;
//       }

//       h1,
//       .description,
//       .action {
//         margin: 1.2rem auto;
//       }

//       .description {
//         font-size: 1.2rem;
//       }

//       .action-button {
//         font-size: 1rem;
//         padding: 0.6rem 1.2rem;
//       }
//     }

//     .feature {
//       h2 {
//         font-size: 1.25rem;
//       }
//     }
//   }
// }
</style>
