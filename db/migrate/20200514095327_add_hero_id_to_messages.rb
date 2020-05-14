class AddHeroIdToMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :hero_id, :integer
  end
end
