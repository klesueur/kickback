UPDATE deals
SET purchase_total = $1
WHERE deal_id = $2
RETURNING *;