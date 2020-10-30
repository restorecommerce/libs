import { metaAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metaMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metaItem, metaOrder, } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { getGQLObject, registerTyping } from "@gql/protos";

registerTyping('.io.restorecommerce.attribute.Attribute', metaAttribute, {name: 'Attribute'});
registerTyping('.io.restorecommerce.meta.Meta', metaMeta, {name: 'Meta'});
registerTyping('.io.restorecommerce.order.Item', metaItem, {name: 'Item'});
registerTyping('.io.restorecommerce.order.Items', metaItem, {name: 'Items'});
registerTyping('.io.restorecommerce.order.Order', metaOrder, {name: 'Order'});

export const OrderType = getGQLObject('.io.restorecommerce.order.Order');
