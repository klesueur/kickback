UPDATE deals
SET (lease_id, customer_first, customer_last, purchase_total, month) = ($1, $2, $3, $4, $5)
WHERE deal_id = $6
RETURNING *;