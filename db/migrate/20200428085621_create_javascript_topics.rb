class CreateJavascriptTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :javascript_topics do |t|
      t.text :javascript_topic

      t.timestamps
    end
  end
end
