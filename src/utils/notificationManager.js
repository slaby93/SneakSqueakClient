
import Noty from 'noty';
import 'noty/src/noty.scss';
import 'noty/src/themes/semanticui.scss';

export const TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
};

export default (args) => {
  new Noty({
    type: TYPES.INFO,
    theme: 'semanticui',
    timeout: 1200,
    progressBar: true,
    ...args,
  }).show();
};
