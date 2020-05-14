# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_14_095327) do

  create_table "achievements", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "time"
    t.integer "letter_count"
    t.integer "speed"
    t.string "wrong_letter"
    t.integer "wrong_letter_count"
    t.integer "javascript_topic_id", null: false
    t.integer "ruby_topic_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["javascript_topic_id"], name: "index_achievements_on_javascript_topic_id"
    t.index ["ruby_topic_id"], name: "index_achievements_on_ruby_topic_id"
    t.index ["user_id"], name: "index_achievements_on_user_id"
  end

  create_table "battle_records", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "enemy_id"
    t.integer "time"
    t.integer "letter_count"
    t.integer "speed"
    t.string "wrong_letter"
    t.integer "wrong_letter_count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_battle_records_on_user_id"
  end

  create_table "heros", force: :cascade do |t|
    t.string "heroname"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "javascript_topics", force: :cascade do |t|
    t.text "javascript_topic"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "room_id"
    t.integer "hero_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ruby_topics", force: :cascade do |t|
    t.text "ruby_topic"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "achievements", "javascript_topics"
  add_foreign_key "achievements", "ruby_topics"
  add_foreign_key "achievements", "users"
  add_foreign_key "battle_records", "users"
end
