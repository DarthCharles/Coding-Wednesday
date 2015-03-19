begin
	File.open(ARGV[0]).each_line do |line|
		line = line.gsub(/\n/, "").split(%r{,\s*}) 	

		phrase = line[0].split('')
		letters = line[1].split('')

		puts (phrase - letters).join('')
 	end
end