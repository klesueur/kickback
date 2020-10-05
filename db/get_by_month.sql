SELECT d.deal_id, d.rep_id AS user_id, d.month
FROM deals d
JOIN users u ON d.rep_id = u.id
WHERE d.rep_id = $1;