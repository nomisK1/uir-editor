export const tpch20 = `const %1532[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1889[72] ="\\001\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\031\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\/*+U\\000\\000\\006\\000\\000\\000CANADA\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1999[8] ="\\000\\000\\000\\000\\001\\000\\000\\000"

const %6319[0] =""

const %6358[16] ="\\000\\000\\000\\000\\001\\000\\000\\000\\002\\000\\000\\000\\003\\000\\000\\000"

const %13446[22] ="\\000\\000\\000\\000\\006\\000\\000\\000\\000\\000\\000\\000\\006\\000\\000\\000forest"

const %14800[12] ="\\000\\000\\000\\000\\001\\000\\000\\000\\002\\000\\000\\000"

const %18983[72] ="\\012\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\/*+U\\000\\000\\0**_%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\0006a%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %19094[16] ="\\001\\000\\000\\000\\002\\000\\000\\000\\004\\000\\000\\000\\012\\000\\000\\000"

const %32382[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %34485[1] =" "

define int32 @_10_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_1, i32 0)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 560
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_4, i32 0)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 608
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 696
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_6, i64 17)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 25296
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_8, i32 0)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 25344
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_9, i32 0)
  %CompilationContext_cpp_214_10 = getelementptr int8 %state, i64 25392
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_10, %state, global %1532)
  return 1
}

define int32 @_10_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_230_0 = load data128 %right
  %Char_cpp_136_ = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_0)
  return %Char_cpp_136_
}

declare int32 @_ZN5umbra11CharRuntime7compareENS_9data128_tES1_(data128 %364, data128 %378)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %512)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %722, int32 %736)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %1237, int64 %1251)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %1667, int8* %1681, int8* %1695)

define int32 @_10_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 6, global %1889, i64 1, global %1999, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %2126, int8* %2140, int64 %2154, object umbra::Relation::RestrictionInfo* %2168, int64 %2182, int32* %2196, int32 %2210)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %2296, int32 %2310, int32 %2324, int32 %2338, int32 %2352)

define int32 @_10_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %2534)

define int32 @_10_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %2686)

define int32 @_10_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2818, int32 %2832)

define int32 @_10_join_tablescan_nation(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 40
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, 4705770416667361286
  condbr %Char_cpp_114_ %then %cont11

then:
  %Char_cpp_115_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_9 = cmpeq i64 %Char_cpp_115_, 16708
  condbr %Char_cpp_115_9 %then10 %else

then10:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {4705770416667361286,16708})
  br %cont

cont:
  %4752 = phi bool [bool true, %then10 %Char_cpp_118_, %else]
  br %cont11

cont11:
  %4795 = phi bool [%4752, %cont bool false, %loopTuples]
  condbr %4795 %then12 %contScan

then12:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5
}

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %4678, data128 %4692)

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %5168, int64 %5182, int64 %5196)

define int32 @_10_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %5657)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %5739, int8* %5753, int32 %5767)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %5807, int32 %5821)

define int32 @_10_join_tablescan_nation_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %6065, object umbra::ChainingHashTable::Collector* %6079)

define int32 @_10_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 1, global %6319, i64 0, global %6358, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %6205)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %6237)

define int32 @_10_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_join_join_tablescan_supplier(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 80
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_9 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_9, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_10 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_11 = add i64 %RelationMappedLogic_cpp_320_10, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_12 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_11, %RelationMappedLogic_cpp_320_10
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_12
  %RelationMappedLogic_cpp_303_13 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_319_14 = getelementptr data128 %RelationMappedLogic_cpp_303_13, %localTid
  %RelationMappedLogic_cpp_320_15 = load int64 %RelationMappedLogic_cpp_319_14
  %RelationMappedLogic_cpp_320_16 = load int64 %RelationMappedLogic_cpp_319_14, i32 1
  %RelationMappedLogic_cpp_321_17 = trunc i32 %RelationMappedLogic_cpp_320_15
  %RelationMappedLogic_cpp_322_18 = cmpult i32 12, %RelationMappedLogic_cpp_321_17
  %RelationMappedLogic_cpp_322_19 = add i64 %RelationMappedLogic_cpp_320_16, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_20 = select i64 %RelationMappedLogic_cpp_322_18, %RelationMappedLogic_cpp_322_19, %RelationMappedLogic_cpp_320_16
  %RelationMappedLogic_cpp_324_21 = builddata128 d128 %RelationMappedLogic_cpp_320_15 %RelationMappedLogic_cpp_322_20
  %Hash_cpp_265_22 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_375_23 = crc32 i64 5961697176435608501, %Hash_cpp_265_22
  %Hash_cpp_376_24 = crc32 i64 2231409791114444147, %Hash_cpp_265_22
  %Hash_cpp_380_25 = rotr i64 %Hash_cpp_376_24, 32
  %Hash_cpp_380_26 = xor i64 %Hash_cpp_375_23, %Hash_cpp_380_25
  %Hash_cpp_380_27 = mul i64 %Hash_cpp_380_26, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_27, i64 37)
  store int32 %RelationMappedLogic_cpp_308_8, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %RelationMappedLogic_cpp_324_21)
  %MaterializationHelper_cpp_161_28 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store int8 i8 0, %MaterializationHelper_cpp_161_28
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 12
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %8416, int64 %8430)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %10130, data128 %10144)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %10349, int8* %10363)

define int32 @_10_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25344
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

define int32 @_10_join_join_tablescan_supplier_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25344
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 15
}

define int32 @_10_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 0, global %6319, i64 0, global %1999, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

define int32 @_10_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_join_tablescan_part(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 112
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Text_cpp_355_ = call bool _ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc (%RelationMappedLogic_cpp_324_, global %13446)
  condbr %Text_cpp_355_ %then %contScan

then:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_9 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_10 = mul i64 %Hash_cpp_380_9, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_10, i64 4)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 19
}

declare bool @_ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc(data128 %13491, int8* %13505)

define int32 @_10_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 560
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 22)
  return 21
}

define int32 @_10_join_tablescan_part_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 560
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 22
}

define int32 @_10_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 2, global %6319, i64 0, global %14800, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 23, i32 24, i32 25)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 26)
  return 27
}

define int32 @_10_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_join_join_tablescan_partsupp(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 36
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 560
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_303_9 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 524288
  %RelationMappedLogic_cpp_308_10 = load int32 %RelationMappedLogic_cpp_303_9, %localTid
  %Hash_cpp_265_11 = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_265_12 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_12, 32
  %Hash_cpp_269_13 = or i64 %Hash_cpp_265_11, %Hash_cpp_269_
  %Hash_cpp_375_14 = crc32 i64 5961697176435608501, %Hash_cpp_269_13
  %Hash_cpp_376_15 = crc32 i64 2231409791114444147, %Hash_cpp_269_13
  %Hash_cpp_380_16 = rotr i64 %Hash_cpp_376_15, 32
  %Hash_cpp_380_17 = xor i64 %Hash_cpp_375_14, %Hash_cpp_380_16
  %Hash_cpp_380_18 = mul i64 %Hash_cpp_380_17, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_18, i64 12)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  store int32 %RelationMappedLogic_cpp_308_8, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 8
  store int32 %RelationMappedLogic_cpp_308_10, %MaterializationHelper_cpp_161_
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 26
}

define int32 @_10_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25296
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 29)
  return 28
}

define int32 @_10_join_join_tablescan_partsupp_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25296
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 29
}

define int32 @_10_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 608
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %18983, i64 1, global %19094, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 30, i32 31, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 33)
  return 34
}

define int32 @_10_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 17)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %19422, int64 %19436)

define int32 @_10_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %19592)

define int32 @_10_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_groupby_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_310_, 2449718
  %Date_cpp_57_6 = cmpule i32 2449354, %RelationMappedLogic_cpp_310_
  %TableScanTranslator_cpp_425_ = and bool %Date_cpp_57_6, %Date_cpp_57_
  condbr %TableScanTranslator_cpp_425_ %then %contScan

then:
  %RelationMappedLogic_cpp_303_7 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1048576
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_7, %localTid
  %RelationMappedLogic_cpp_303_8 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_8, %localTid
  %RelationMappedLogic_cpp_303_9 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 524288
  %RelationMappedLogic_cpp_308_10 = load int32 %RelationMappedLogic_cpp_303_9, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_265_11 = zext i64 %RelationMappedLogic_cpp_308_10
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_11, 32
  %Hash_cpp_269_12 = or i64 %Hash_cpp_265_, %Hash_cpp_269_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_269_12
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_269_12
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_380_14, 1023
  %PreaggregationLogic_cpp_20_15 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_15, i32 0, i32 0
  %PreaggregationLogic_cpp_25_16 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_380_14
  condbr %PreaggregationLogic_cpp_25_16 %then17 %else

then17:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_380_14)
  store int32 %RelationMappedLogic_cpp_308_, %PreaggregationLogic_cpp_29_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 4
  store int32 %RelationMappedLogic_cpp_308_10, %MaterializationHelper_cpp_983_
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 8
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_207_, i64 8
  store int64 %RelationMappedLogic_cpp_309_, %GroupByTranslator_cpp_207_
  store int8 i8 0, %MaterializationHelper_cpp_726_
  br %cont27

else:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_15, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_36_
  %MaterializationHelper_cpp_876_18 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 4
  %MaterializationHelper_cpp_876_19 = load int32 %MaterializationHelper_cpp_876_18
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_876_
  %Integer_cpp_83_20 = cmpeq i32 %RelationMappedLogic_cpp_308_10, %MaterializationHelper_cpp_876_19
  %ConsumerContext_cpp_407_ = and bool %Integer_cpp_83_, %Integer_cpp_83_20
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %then17 %else21

else21:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 8
  %MaterializationHelper_cpp_726_22 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 8
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_22
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_23 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_23 %then24 %else25

then24:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  store int64 %RelationMappedLogic_cpp_309_, %GroupByTranslator_cpp_217_
  store int8 %MaterializationHelper_cpp_752_, %MaterializationHelper_cpp_726_22
  br %cont26

else25:
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_217_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_, %RelationMappedLogic_cpp_309_ %cont %overflow

cont:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_217_
  br %cont26

cont26:
  br %cont27

cont27:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 33

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %22041, int64 %22055)

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

define int32 @_10_planStep23(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 696
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 36)
  return 35
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %23666, int8* %23680, int64 %23694)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %23785, int8* %23799)

define int32 @_10_groupby_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_112_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %GroupByTranslator_cpp_112_
  %MaterializationHelper_cpp_876_2 = getelementptr int8 %GroupByTranslator_cpp_112_, i64 4
  %MaterializationHelper_cpp_876_3 = load int32 %MaterializationHelper_cpp_876_2
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_4 = load int32 %GroupByTranslator_cpp_113_
  %MaterializationHelper_cpp_876_5 = getelementptr int8 %GroupByTranslator_cpp_113_, i64 4
  %MaterializationHelper_cpp_876_6 = load int32 %MaterializationHelper_cpp_876_5
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_4
  %Integer_cpp_83_7 = cmpeq i32 %MaterializationHelper_cpp_876_3, %MaterializationHelper_cpp_876_6
  %ConsumerContext_cpp_407_ = and bool %Integer_cpp_83_, %Integer_cpp_83_7
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %noMatch %else

else:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 24
  %GroupByTranslator_cpp_121_8 = getelementptr int8 %chainEntry, i64 24
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 8
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_9 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  %MaterializationHelper_cpp_726_10 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 8
  %MaterializationHelper_cpp_727_11 = load int8 %MaterializationHelper_cpp_726_10
  %MaterializationHelper_cpp_780_12 = and i8 %MaterializationHelper_cpp_727_11, 1
  %MaterializationHelper_cpp_780_13 = cmpne i8 %MaterializationHelper_cpp_780_12, 0
  condbr %MaterializationHelper_cpp_780_13 %then14 %else15

then14:
  br %cont21

else15:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  condbr %MaterializationHelper_cpp_780_9 %then16 %else17

then16:
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_121_
  store int64 %MaterializationHelper_cpp_977_, %GroupByTranslator_cpp_121_8
  br %cont20

else17:
  %MaterializationHelper_cpp_977_18 = load int64 %GroupByTranslator_cpp_121_8
  %MaterializationHelper_cpp_977_19 = load int64 %GroupByTranslator_cpp_121_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_18, %MaterializationHelper_cpp_977_19 %cont %overflow

cont:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_121_8
  br %cont20

cont20:
  br %cont21

cont21:
  %26321 = phi i8 [%MaterializationHelper_cpp_727_, %then14 %MaterializationHelper_cpp_752_, %cont20]
  store int8 %26321, %MaterializationHelper_cpp_726_
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_22 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_22, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 33
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 36

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %24145)

define int32 @_10_planStep24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 696
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 37, i32 38, i32 39)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 40)
  return 41
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %27169, int8* %27183)

define int32 @_10_planStep25(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %1532)
  return 0
}

define int32 @_10_planStep26(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %27549)

define int32 @_10_planStep27(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_sort_join_join_map_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopDoneloopHashChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_140_
  %MaterializationHelper_cpp_876_1 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 4
  %MaterializationHelper_cpp_876_2 = load int32 %MaterializationHelper_cpp_876_1
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 8
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_248_, i64 8
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_3 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_3 %then %else

then:
  br %cont

else:
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_248_
  br %cont

cont:
  %28664 = phi i64 [i64 0, %then %MaterializationHelper_cpp_977_, %else]
  condbr %MaterializationHelper_cpp_780_3 %then4 %else5

then4:
  br %cont7

else5:
  %Numeric_cpp_711_ = checkedsmul i64 5, %28664 %cont6 %overflow

cont6:
  br %cont7

cont7:
  %28787 = phi i64 [i64 0, %then4 %Numeric_cpp_711_, %cont6]
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25296
  %Hash_cpp_265_ = zext i64 %MaterializationHelper_cpp_876_
  %Hash_cpp_265_8 = zext i64 %MaterializationHelper_cpp_876_2
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_8, 32
  %Hash_cpp_269_9 = or i64 %Hash_cpp_265_, %Hash_cpp_269_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_269_9
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_269_9
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_10 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_11 = mul i64 %Hash_cpp_380_10, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_11)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %cont7 %ChainingHashTableLogic_cpp_136_49, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_12 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 8
  %MaterializationHelper_cpp_230_13 = load int32 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_230_
  %Integer_cpp_83_15 = cmpeq i32 %MaterializationHelper_cpp_876_2, %MaterializationHelper_cpp_230_12
  %ConsumerContext_cpp_407_ = and bool %Integer_cpp_83_, %Integer_cpp_83_15
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else16

else16:
  %Numeric_cpp_366_ = SExt i64 %MaterializationHelper_cpp_230_13
  %Numeric_cpp_258_ = mul i64 %Numeric_cpp_366_, 1000
  %Numeric_cpp_277_ = cmpslt i64 %28787, %Numeric_cpp_258_
  %Value_cpp_126_ = not bool %MaterializationHelper_cpp_780_3
  %Value_cpp_126_17 = and bool %Numeric_cpp_277_, %Value_cpp_126_
  condbr %Value_cpp_126_17 %then18 %continueProbe

then18:
  %CompilationContext_cpp_214_19 = getelementptr int8 %state, i64 25344
  %Hash_cpp_265_20 = zext i64 %MaterializationHelper_cpp_230_12
  %Hash_cpp_375_21 = crc32 i64 5961697176435608501, %Hash_cpp_265_20
  %Hash_cpp_376_22 = crc32 i64 2231409791114444147, %Hash_cpp_265_20
  %Hash_cpp_380_23 = rotr i64 %Hash_cpp_376_22, 32
  %Hash_cpp_380_24 = xor i64 %Hash_cpp_375_21, %Hash_cpp_380_23
  %Hash_cpp_380_25 = mul i64 %Hash_cpp_380_24, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_27 = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_19, %Hash_cpp_380_25)
  %ChainingHashTableLogic_cpp_110_28 = isnotnull ptr %ChainingHashTableLogic_cpp_108_27
  condbr %ChainingHashTableLogic_cpp_110_28 %looploopHashChain29 %loopDoneloopHashChain30

looploopHashChain29:
  %hashEntry31 = phi ptr [%ChainingHashTableLogic_cpp_108_27, %then18 %ChainingHashTableLogic_cpp_136_, %continueProbe26]
  %ChainingHashTableLogic_cpp_115_32 = getelementptr int8 %hashEntry31, i64 16
  %MaterializationHelper_cpp_230_33 = load int32 %ChainingHashTableLogic_cpp_115_32
  %MaterializationHelper_cpp_233_34 = getelementptr int8 %ChainingHashTableLogic_cpp_115_32, i64 4
  %MaterializationHelper_cpp_230_35 = load data128 %MaterializationHelper_cpp_233_34
  %MaterializationHelper_cpp_229_36 = getelementptr int8 %MaterializationHelper_cpp_233_34, i64 16
  %MaterializationHelper_cpp_230_37 = load data128 %MaterializationHelper_cpp_229_36
  %MaterializationHelper_cpp_233_38 = getelementptr int8 %MaterializationHelper_cpp_233_34, i64 32
  %Integer_cpp_83_39 = cmpeq i32 %MaterializationHelper_cpp_230_12, %MaterializationHelper_cpp_230_33
  %ConsumerContext_cpp_417_40 = not bool %Integer_cpp_83_39
  condbr %ConsumerContext_cpp_417_40 %continueProbe26 %else41

else41:
  %HashJoinTranslator_cpp_466_ = load int8 %MaterializationHelper_cpp_233_38
  %HashJoinTranslator_cpp_466_42 = cmpeq i8 %HashJoinTranslator_cpp_466_, 0
  condbr %HashJoinTranslator_cpp_466_42 %then43 %cont48

then43:
  %HashJoinTranslator_cpp_468_ = atomicrmwxchg int8 i8 2, %MaterializationHelper_cpp_233_38
  %HashJoinTranslator_cpp_468_44 = cmpeq i8 %HashJoinTranslator_cpp_468_, 0
  condbr %HashJoinTranslator_cpp_468_44 %then45 %cont47

then45:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_310_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 32)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%SortTranslator_cpp_310_, %MaterializationHelper_cpp_230_35)
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_310_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_37)
  br %cont47

cont47:
  br %cont48

cont48:
  br %loopDoneloopHashChain30

continueProbe26:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_19, %hashEntry31)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain29 %loopDoneloopHashChain30

loopDoneloopHashChain30:
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_49 = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_50 = isnotnull ptr %ChainingHashTableLogic_cpp_136_49
  condbr %ChainingHashTableLogic_cpp_137_50 %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 40

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %31072, int64 %31086)

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %31146, data128 %31160)

define int32 @_10_planStep28(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 43)
  return 42
}

define int32 @_10_sort_join_join_map_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25392
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 43
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %32142)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %32224, object umbra::SortOperator* %32238)

define int32 @_10_planStep29(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25392
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %32382)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 25392
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 45)
  return 44
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %32466, int8* %32480, int8* %32494)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %32635, object umbra::SortOperator* %32649)

define int32 @_10_sort_join_join_map_groupby_extra30(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25392
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %32382, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 45
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %32899, int8* %32913, int8* %32927, int32 %32941)

define int32 @_10_planStep31(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25392
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 46, i32 47, i32 48)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 49)
  return 50
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %33193, object umbra::SortOperator* %33207, bool %33221)

define int32 @_10_planStep32(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep33(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep34(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_326_ = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %SortTranslator_cpp_326_0 = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_329_ = cmpne ptr %SortTranslator_cpp_326_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_329_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%SortTranslator_cpp_326_, %body %SortTranslator_cpp_341_, %cont]
  %CodeGen_hpp_1103_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load data128 %CodeGen_hpp_1103_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 16
  %MaterializationHelper_cpp_230_1 = load data128 %MaterializationHelper_cpp_233_
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then %else

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont

else:
  br %cont

cont:
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x558baaae27c0, i64 720575940798709760, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %34485, i32 1)
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x558baaae27c0, i64 792633535088295936, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 49
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %34276, int8 %34290)

declare void @_ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %34417, int64 %34431, data128 %34445)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %34507, int32 %34521)

declare void @_ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %34571, int64 %34585, data128 %34599)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %34675)

define int32 @_10_planStep35(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_10_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 560
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 608
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 696
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 25296
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_7)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 25344
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_8)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 25392
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_9)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %35097)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %35249)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %35608)
`;