class User < ActiveRecord::Base
  def self.from_auth auth
    self.find_by( uid: auth.uid, provider: auth.provider) || self.create_from_auth( auth )
  end

  def self.create_from_auth auth
    create(uid: auth.id, provider: auth.provider, name: auth.info.name, email: auth.info.email, image: auth.info.image, gender: auth.extra.raw_info.gender)
  end
end
