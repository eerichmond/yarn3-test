import { format } from 'date-fns';

it('works', () => {
  const dateAsString = format(new Date(), 'mm/dd/yyyy');
  console.log(`works ${dateAsString}`);
});
