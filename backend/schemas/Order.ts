import { integer, relationship, select, text, virtual } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Order = list({
  fields: {
      label: virtual({
          qraphQLReturnType: 'String',
          resolver(item){
              return `Order: ${item.id}`;
          },
      }),
      total: integer(),
      items: relationship({ref: 'OrderItem.order', many: true}),
      user: relationship({ref: 'User.orders'}),
      charge: text(),
  }
});
