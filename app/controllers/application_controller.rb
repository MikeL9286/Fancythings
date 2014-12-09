class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  respond_to :js, :json

  def about

  end

  def press

  end

  def liketoknowit

  end

  def contact
    @email = params[:email]
    @message = params[:message]
    ContactMailer.contact_email(@email, @message)
  end
end
