class ProjectsController < ApplicationController
  def index
    projects = Project.all
    render json: ProjectsSerializer.new(projects)
  end

  def show
    project = Project.find_by(id: params[:id])
    render json: ProjectsSerializer.new(project)
  end
end
