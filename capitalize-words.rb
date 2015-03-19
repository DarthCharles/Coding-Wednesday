begin
	File.open(ARGV[0]).each_line do |line|
		line = line.gsub(/\n/, "").split(' ') 	

		for i in 0..line.length - 1
		line[i] = line[i][0].upcase  + line[i][1, line[i].length] 
		end
      
     puts line.join(' ')

 	end
end