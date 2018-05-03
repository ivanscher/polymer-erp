/**
 * Created by ivans on 30/01/2018.
 */
class Dashboard extends Polymer.Element {
  constructor() {
    super();
  }

  static get is() {
    return 'dashboard-page';
  }

  static get properties() {
    return {
      // This shouldn't be neccessary, but the Analyzer isn't picking up
      // Polymer.Element#rootPath
      rootPath: String,
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      dashboardPath: {
        type: String, 
        value: '/dashboard/',
      },
        menuclass: {
            type: String,
            value: 'show' // init the value to true so it will be hidden on page load
        },
        companyclass: {
            type: String,
            value: 'hide' // init the value to true so it will be hidden on page load
        },
        arrow: {
            type: String,
            value: 'arrow-drop-down' // init the value to true so it will be hidden on page load
        }


    };
  }

  toggle() {
      this.$.collapse.toggle();
      let first = Polymer.dom(this.$.menu).querySelectorAll('paper-input[label="Buscar"]');
      first.blur();
  }

  toggleMenu() {
    if(this.companyclass=='hide'){
      this.companyclass='show';
      this.menuclass='hide';
      this.arrow='arrow-drop-up';
    }else{
        this.arrow='arrow-drop-down';
      this.companyclass='hide';
      this.menuclass='show';
    }
    /*
    this.$.collapse2.toggle();
      let first = Polymer.dom(this.$.menu).querySelectorAll('paper-input[label="Buscar"]');
      first.blur();
      */
  }

  ready() {
    super.ready();

    const {
      buttonMenu,
      menuDrawer,
    } = this.$;

    let menu = Polymer.dom(this.$.menu).querySelectorAll('.menu');

    for(let i=0; i<menu.length; i++) {
      menu[i].addEventListener('click', (e) => {
        menuDrawer.toggle();
      });
    }

    buttonMenu.addEventListener('click', (e) => {
      menuDrawer.toggle();
    });    
  }

  _routePageChanged(page) {
    this.page = page || 'contatos';
  }

  _pageChanged(page) {
    // Load page import on demand. Show 404 page if fails
    var resolvedPageUrl = this.resolveUrl(page + '.html');
    Polymer.importHref(
      resolvedPageUrl,
      null,
      null,
      true);
  }
}

window.customElements.define(Dashboard.is, Dashboard);
