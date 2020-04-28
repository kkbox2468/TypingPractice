class CreateRubyTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :ruby_topics do |t|
      t.text :ruby_topic

      t.timestamps
    end
  end
end
