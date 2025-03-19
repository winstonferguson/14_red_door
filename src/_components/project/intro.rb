module Project
  # Intro component for 14RD project pages
  class Intro < Bridgetown::Component

    # Initializes the Intro component
    # @param resource [Bridgetown::Resource] The current project resource
    # @param site [Bridgetown::Site] The site object
    def initialize(resource:, site:)
      @resource = resource
      @site = site
    end
  end
end
