class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false, unique: true 
      t.integer :creator_id, null: false, index: true 
      t.integer :type, default: 0, null: false 
      t.boolean :is_private, default: false, null: false 
      t.timestamps
    end
  end
end
