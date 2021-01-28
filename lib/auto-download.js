(function () {
  menu = document.getElementById('menubar-item-file');

  if (menu) {
    menu.click();
    setTimeout(() => {
      menuItem = [].slice.call(document.querySelectorAll('.label'));
      console.log('menuItem', menuItem);
      menuItemTarget = menuItem.find(label => {
        return label ? label.innerHTML.trim() == 'Export' : false;
      });
      console.log('menuItemTarget', menuItemTarget);
      if (menuItemTarget) menuItemTarget.click();
      setTimeout(() => {
        // const subMenuItem = [].slice.call(document.querySelectorAll('.label')).find(label => label.textContent.trim() == 'Visio 2010 (VDX)')
        subMenuItem = [].slice.call(document.querySelectorAll('.label')).find(label => {
          return label ? label.innerHTML.trim() == 'SVG with transparent background' : false;
        });

        if (subMenuItem) {
          subMenuItem.click();
          setTimeout(() => {
            buttonItem = [].slice.call(document.querySelectorAll('.lucid-button-primary')).find(label => {
              return label ? label.innerText.trim() == 'Download' : false;
            });
            if (buttonItem) buttonItem.click();
          }, 1000);
        }

        ;
      }, 1000);
    }, 1000);
  }
})()(function () {
  menu = document.getElementById('menubar-item-file');

  if (menu) {
    menu.click();
    setTimeout(() => {
      menuItem = [].slice.call(document.querySelectorAll('.label'));
      console.log('menuItem', menuItem);
      menuItemTarget = menuItem.find(label => {
        return label ? label.innerHTML.trim() == 'Export' : false;
      });
      console.log('menuItemTarget', menuItemTarget);
      if (menuItemTarget) menuItemTarget.click();
      setTimeout(() => {
        // const subMenuItem = [].slice.call(document.querySelectorAll('.label')).find(label => label.textContent.trim() == 'Visio 2010 (VDX)')
        subMenuItem = [].slice.call(document.querySelectorAll('.label')).find(label => {
          return label ? label.innerHTML.trim() == 'SVG with transparent background' : false;
        });

        if (subMenuItem) {
          subMenuItem.click();
          setTimeout(() => {
            buttonItem = [].slice.call(document.querySelectorAll('.lucid-button-primary')).find(label => {
              return label ? label.innerText.trim() == 'Download' : false;
            });
            if (buttonItem) buttonItem.click();
          }, 1000);
        }

        ;
      }, 1000);
    }, 1000);
  }
})();