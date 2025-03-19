module Project
  # Feature Video component for 14RD project pages
  class FeatureVideo < Bridgetown::Component

    # Initializes the Feature Video component
    # @param resource [Bridgetown::Resource] The current project resource
    # @param src [String] Source URL of the video
    def initialize(resource:, src:)
      @resource = resource
      @src = src
    end
  end
end
