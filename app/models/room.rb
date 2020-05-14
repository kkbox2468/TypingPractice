class Room < ApplicationRecord
  has_many :messages
  has_many :heros, through: :messages
end
