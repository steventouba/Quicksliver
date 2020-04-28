class CreateChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_memberships do |t|
      t.integer :user_id, index: true, null: false 
      t.integer :channel_id, index: true, null: false 
      t.boolean :is_admin, default: false, null: false
      t.timestamps
    end
  end
end
