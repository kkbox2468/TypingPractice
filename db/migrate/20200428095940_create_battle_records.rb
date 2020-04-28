class CreateBattleRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :battle_records do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :enemy_id
      t.integer :time
      t.integer :letter_count
      t.integer :speed
      t.string :wrong_letter
      t.integer :wrong_letter_count

      t.timestamps
    end
  end
end
