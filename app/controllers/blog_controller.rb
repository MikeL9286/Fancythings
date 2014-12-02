class BlogController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	
  end

  def blogpost
  	key = params[:id]
  end

  def search
  	key = params[:key]
  end

  def archive

  end
end
