class BlogController < ActionController::Base
  require 'blogger_service'

  protect_from_forgery with: :exception

  @@blogger_service = BloggerService.new
  
  def index
    @posts = @@blogger_service.GetAllPosts
    @slideshowPosts = @posts.take(4)

    set_meta_values()
  end

  def blogpost
  	path = '/' + params[:year] + '/' + params[:month] + '/' + params[:title] + '.html'
    @post = @@blogger_service.GetPostByPath(path)

    set_meta_values(
      @post.title, 
      @post.summary, 
      @post.openGraphImages)

    @relatedPosts = get_related_posts(@post)
  end

  def search
  	@searchKey = params[:key]
    @posts = @@blogger_service.GetPostsBySearchKey(@searchKey)
    set_meta_values('Search')
  end

  def archive
    set_meta_values('Archive')
    @grouped_posts = @@blogger_service.GetArchivePosts
  end

  helper_method :get_url_for_path
  def get_url_for_path(path)
    return get_domain_url + path
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

  def get_related_posts(post)
    aggregatedPosts = Array.new
    for label in post.labels
      posts = @@blogger_service.GetPostsByLabel(label)
      aggregatedPosts.push(*posts)
    end
    aggregatedPosts.sort_by { |p| Date.parse(p.publishedDate) }.reverse!
    aggregatedPosts.delete_if { |p| p.id == post.id } 
    aggregatedPosts.uniq! { |p| p.id }
    return aggregatedPosts.take(6)
  end
end


# // Keep for reference in case the need for popular posts returns.
# //Blogger.GetPopularThreads = function () {
# //    $.ajax({
# //        type: "GET",
# //        url: 'https://disqus.com/api/3.0/threads/listPopular.json?forum=fancythingsblog&interval=90d&limit=9&api_key=hfBewKMoMzDCj1FeyswsLVmBC5Gi0FvDI3ED6Or1iZueKDKubbvPnh6NolyhGdaX',
# //        dataType: "json",
# //        async: false,
# //        processData: "false",
# //        beforeSend: function (jqXHR, settings) {
# //            //start timer gif
# //        },
# //        error: function (jqXHR, textStatus, errorThrown) {
# //            alert("error: " + url);
# //        },
# //        success: function (data) {
# //            popularThreads = data.response;
# //            popularThreads.forEach(function (post) {
# //                setThumbnail(post);
# //            });
# //        }
# //    });
# //};