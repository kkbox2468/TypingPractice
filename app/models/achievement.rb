class Achievement < ApplicationRecord
  belongs_to :user
  belongs_to :javascript_topic
  belongs_to :ruby_topic
end
