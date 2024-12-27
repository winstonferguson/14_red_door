class Project::Outro < Bridgetown::Component
  def initialize(resource:, site:)
    @resource, @site = resource, site
  end
end
