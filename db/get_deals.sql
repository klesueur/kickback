SELECT d.deal_id, u.email, d.rep_id AS user_id, d.lease_id, d.customer_first, d.customer_last, d.purchase_total
FROM deals d
JOIN users u ON d.rep_id = u.id;