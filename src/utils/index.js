import formatDate from 'date-fns/format';
import ua from 'date-fns/locale/uk';

export const formatDateUtility = (date) => formatDate(new Date(date), 'PPP', { locale: ua })