class ServicesController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  respond_to :js, :json
  
  def index
  	
  end

  def inquiry
    @email = params[:email]
    @name = params[:name]
    @website = params[:website]
    @message = params[:message]
    InquiryMailer.inquiry_email(@email, @name, @website, @message)
  end
end
