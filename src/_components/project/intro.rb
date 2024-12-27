class Project::Intro < Bridgetown::Component
  def initialize(resource:, site:)
    @resource, @site = resource, site
  end
end
