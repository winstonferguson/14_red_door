class Project::FeatureImage < Bridgetown::Component
  def initialize(resource:, src:)
    @resource, @src = resource, src
  end
end
