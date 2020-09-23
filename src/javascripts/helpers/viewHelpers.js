import farmersView from '../components/views/farmersView';
import cowsView from '../components/views/cowsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'farmers-link':
      return farmersView.farmersView();
    case 'cows-link':
      return cowsView.cowView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
