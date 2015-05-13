Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV['twitter_key'], ENV['twitter_secret']
  # provider :facebook, '854213751281806', '93e2c3f66d769f8b2ef7b26cadc3bbf2'
  provider :facebook, ENV['facebook_key'], ENV['facebook_secret']
end
#127.0.0.1
# 854213751281806
