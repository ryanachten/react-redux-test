import moment from 'moment';

export default [{
  id: 1,
  description: 'apple',
  note: '',
  amount: 100,
  createdAt: moment(0).add(1, 'days').valueOf()
},
{
  id: 2,
  description: 'orange',
  note: '',
  amount: 2000,
  createdAt: moment(0).add(3, 'days').valueOf()
},
{
  id: 3,
  description: 'melon',
  note: '',
  amount: 300,
  createdAt: moment(0).add(7, 'days').valueOf()
}];
