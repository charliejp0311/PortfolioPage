class ProjectsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :walkthrough, :github
end
