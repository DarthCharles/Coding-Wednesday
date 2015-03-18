begin
	x = 0;
	File.open(ARGV[0]).each_line do |line|
      x += Integer(line)
	end

	puts x
end