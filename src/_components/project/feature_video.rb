class Project::FeatureVideo < Bridgetown::Component
  def initialize(resource:, src:)
    @resource, @src = resource, src
  end
end
