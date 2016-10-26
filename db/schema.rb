# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161026043634) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_favorites_on_listing_id", using: :btree
    t.index ["user_id"], name: "index_favorites_on_user_id", using: :btree
  end

  create_table "images", force: :cascade do |t|
    t.integer  "listing_id", null: false
    t.string   "src",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_images_on_listing_id", using: :btree
  end

  create_table "listings", force: :cascade do |t|
    t.string   "address",                      null: false
    t.float    "lat",                          null: false
    t.float    "lng",                          null: false
    t.float    "rent",                         null: false
    t.float    "bathrooms",                    null: false
    t.integer  "bedrooms",                     null: false
    t.string   "description",                  null: false
    t.string   "listing_type",                 null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.boolean  "fee",          default: false
    t.boolean  "parking",      default: false
    t.boolean  "cats",         default: false
    t.boolean  "dogs",         default: false
    t.index ["address"], name: "index_listings_on_address", unique: true, using: :btree
    t.index ["lat", "lng"], name: "index_listings_on_lat_and_lng", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "name",            null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
