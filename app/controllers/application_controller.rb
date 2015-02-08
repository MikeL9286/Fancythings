class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  respond_to :js, :json

  def about
    set_meta_values('About')
  end

  def press
    set_meta_values('Press')
  end

  def liketoknowit
    set_meta_values('LTKI')
  end

  def contact
    @email = params[:email]
    @name = params[:name]
    @message = params[:message]
    ContactMailer.contact_email(@email, @name, @message)
  end

  def services
    set_meta_values('Services')
  end

  def inquiry
    @email = params[:email]
    @name = params[:name]
    @website = params[:website]
    @message = params[:message]
    InquiryMailer.inquiry_email(@email, @name, @website, @message)
  end

  private

  def set_meta_values(
    title = 'Fancy Things', 
    description = 'Welcome to Fancy Things! The number one guide to fashion, beauty, home decor, and more...', 
    images = '/assets/logo250x250.png')
    @title = set_title(title)
    @description = description
    @ogImages = set_images(images)
  end

  def set_title(title)
    if title == 'Fancy Things'
      return title
    else
      return title + ' - Fancy Things'
    end
  end

  def set_images(images)
    if (images.respond_to?('each'))
      ogImageTags = ''
      images.each do |image|
        ogImageTags += get_og_image_markup(image.first)
      end
      return ogImageTags
    end

    if images == '/assets/logo250x250.png'
      return get_og_image_markup(get_domain_url + images)
    end
  end

  def get_og_image_markup(url)
    return '<meta name="og:image" content="' + url + '" />'
  end

  def get_domain_url
    if request.host == 'localhost'
      return request.protocol + request.host + ':' + request.port.to_s
    else 
      return request.protocol + request.host
    end
  end
end
