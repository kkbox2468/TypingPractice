class CreateAchievements < ActiveRecord::Migration[6.0]
  def change
    create_table :achievements do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :time
      t.integer :letter_count
      t.integer :speed
      t.string :wrong_letter
      t.integer :wrong_letter_count
      t.belongs_to :javascript_topic, null: false, foreign_key: true
      t.belongs_to :ruby_topic, null: false, foreign_key: true

      t.timestamps
    end
  end
end
