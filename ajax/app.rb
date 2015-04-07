require 'sinatra'
require 'sinatra/reloader' if development?
require 'json'

set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
    erb :index
end

get '/req' do
    content_type :text
    JSON.pretty_generate(request.env)
end

get '/json/get' do
    content_type :json
    JSON.pretty_generate(request.env)
end

post '/json/post' do
    a = params['a']
    b = params['b']
    r = {a:a, b:b, succ:0}
    JSON.pretty_generate(r)
end

get '/:name' do
  name = params['name']
  "Hi #{name}"
end
