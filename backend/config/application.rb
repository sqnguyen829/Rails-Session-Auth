require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Backend
  class Application < Rails::Application
    
    config.load_defaults 6.0

    #the code 'config.session_store' that was put here allows us to useage cookies and seesions to persist, 
    #same_site is allowing us access to the info while we are on the origin, but if 
    #we for instance go to google.com for example the cookies wouldn't be there for that site

    config.session_store :cookie_store, key: '_session', same_site: :strict

    config.middleware.insert_before 0, Rack::Cors do
      allow do
          origins 'http://localhost:3000', 'http://localhost:3001'
          resource '*', headers: :any, methods: [:get, :post, :patch, :delete], credentials: true
      end
    end

    config.api_only = false

  end
end
