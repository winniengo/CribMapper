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

ActiveRecord::Schema.define(version: 20160929063437) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string   "address",      null: false
    t.float    "lat",          null: false
    t.float    "lng",          null: false
    t.float    "rent",         null: false
    t.float    "bathrooms",    null: false
    t.integer  "bedrooms",     null: false
    t.string   "description",  null: false
    t.string   "listing_type", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["address"], name: "index_listings_on_address", unique: true, using: :btree
    t.index ["lat", "lng"], name: "index_listings_on_lat_and_lng", unique: true, using: :btree
  end

end
