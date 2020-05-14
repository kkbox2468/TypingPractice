class Hero < ApplicationRecord
  validates_uniqueness_of :heroname
  def self.generate
    adjectives = ['稀有的', '瘋狂的', '憂鬱的', '喜悅的', '悲傷的', '傳奇的']
    nouns = ['布丁', '雞腿', '牛排', '雪糕', '黑輪']
    number = rand.to_s[2..4]
    heroname = "#{adjectives.sample}-#{nouns.sample}-#{number}"
    create(heroname: heroname)
  end
end
