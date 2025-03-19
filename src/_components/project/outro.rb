module Project
  # Outro component for 14RD project pages
  class Outro < Bridgetown::Component

    # Initializes the Outro component
    # @param resource [Bridgetown::Resource] The current project resource
    # @param site [Bridgetown::Site] The site object
    def initialize(resource:, site:)
      @resource = resource
      @site = site
    end
  end
end
