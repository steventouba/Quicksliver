@memberships.each do |membership| 
  json.set! membership.id do 
    json.extract! membership, :id, :user_id, :channel_id, :is_admin
  end 
end 