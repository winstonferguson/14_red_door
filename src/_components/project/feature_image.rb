module Project
  # Feature Image component for 14RD project pages
  class FeatureImage < Bridgetown::Component

    # Initializes the Feature Image component
    # @param resource [Bridgetown::Resource] The current project resource
    # @param src [String] Source URL of the image
    def initialize(resource:, src:)
      @resource = resource
      @src = src
    end
  end
end
