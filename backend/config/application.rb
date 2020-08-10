require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Backend
  class Application < Rails::Application
    
    config.load_defaults 6.0

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
