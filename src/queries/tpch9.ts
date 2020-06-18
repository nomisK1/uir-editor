export const tpch9 = `const %2254[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %2611[0] =""

const %2649[8] ="\\000\\000\\000\\000\\001\\000\\000\\000"

const %6702[8] ="\\000\\000\\000\\000\\003\\000\\000\\000"

const %12876[33] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\005\\000\\000\\000\\005\\000\\000\\000\\001\\000\\000\\000\\010\\000\\000\\000green"

const %14241[12] ="\\000\\000\\000\\000\\001\\000\\000\\000\\003\\000\\000\\000"

const %19706[24] ="\\000\\000\\000\\000\\001\\000\\000\\000\\002\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000"

const %25431[8] ="\\000\\000\\000\\000\\004\\000\\000\\000"

const %37060[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %39273[1] =" "

define int32 @_9_init(int8* %trampoline, int8* %state, int8* %localState) [
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
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_5, i32 0)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 656
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 752
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_7, i32 0)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 800
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_8)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 896
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_9, i32 0)
  %CompilationContext_cpp_214_10 = getelementptr int8 %state, i64 944
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_10, i64 36)
  %CompilationContext_cpp_214_12 = getelementptr int8 %state, i64 25536
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_12, %state, global %2254)
  return 1
}

define int32 @_9_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_229_ = getelementptr int8 %left, i64 16
  %MaterializationHelper_cpp_230_0 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_230_1 = load data128 %right
  %MaterializationHelper_cpp_229_2 = getelementptr int8 %right, i64 16
  %MaterializationHelper_cpp_230_3 = load int32 %MaterializationHelper_cpp_229_2
  %Char_cpp_136_ = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_1)
  %Integer_cpp_93_ = cmpslt i32 %MaterializationHelper_cpp_230_3, %MaterializationHelper_cpp_230_0
  %Integer_cpp_93_5 = zext i32 %Integer_cpp_93_
  %Integer_cpp_93_6 = cmpslt i32 %MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_3
  %Integer_cpp_93_7 = zext i32 %Integer_cpp_93_6
  %Integer_cpp_93_8 = sub i32 %Integer_cpp_93_7, %Integer_cpp_93_5
  %SortTranslator_cpp_103_ = cmpeq i32 %Char_cpp_136_, 0
  %SortTranslator_cpp_103_9 = SExt i32 %SortTranslator_cpp_103_
  %SortTranslator_cpp_103_10 = and i32 %Integer_cpp_93_8, %SortTranslator_cpp_103_9
  %SortTranslator_cpp_103_11 = or i32 %Char_cpp_136_, %SortTranslator_cpp_103_10
  return %SortTranslator_cpp_103_11
}

declare int32 @_ZN5umbra11CharRuntime7compareENS_9data128_tES1_(data128 %595, data128 %609)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %1052)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %1252, int32 %1266)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %2152, int64 %2166)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %2389, int8* %2403, int8* %2417)

define int32 @_9_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 6, global %2611, i64 0, global %2649, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %2776, int8* %2790, int64 %2804, object umbra::Relation::RestrictionInfo* %2818, int64 %2832, int32* %2846, int32 %2860)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %2946, int32 %2960, int32 %2974, int32 %2988, int32 %3002)

define int32 @_9_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %3184)

define int32 @_9_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %3336)

define int32 @_9_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %3468, int32 %3482)

define int32 @_9_join_tablescan_nation(int8* %trampoline, int8* %state, int8* %localState) [
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
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_9 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_10 = mul i64 %Hash_cpp_380_9, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_10, i64 20)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
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

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %5432, int64 %5446, int64 %5460)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %5606, data128 %5620)

define int32 @_9_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
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

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %6040)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %6122, int8* %6136, int32 %6150)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %6190, int32 %6204)

define int32 @_9_join_tablescan_nation_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %6448, object umbra::ChainingHashTable::Collector* %6462)

define int32 @_9_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 1, global %2611, i64 0, global %6702, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %6588)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %6620)

define int32 @_9_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_supplier(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_10 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_11 = zext i64 %RelationMappedLogic_cpp_308_10
  %Hash_cpp_375_12 = crc32 i64 5961697176435608501, %Hash_cpp_265_11
  %Hash_cpp_376_13 = crc32 i64 2231409791114444147, %Hash_cpp_265_11
  %Hash_cpp_380_14 = rotr i64 %Hash_cpp_376_13, 32
  %Hash_cpp_380_15 = xor i64 %Hash_cpp_375_12, %Hash_cpp_380_14
  %Hash_cpp_380_16 = mul i64 %Hash_cpp_380_15, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_16, i64 20)
  store int32 %RelationMappedLogic_cpp_308_10, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_8)
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

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %8752, int64 %8766)

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %9674, data128 %9688)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %9789, int8* %9803)

define int32 @_9_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 608
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

define int32 @_9_join_join_tablescan_supplier_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 608
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 15
}

define int32 @_9_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 0, global %2611, i64 0, global %2649, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

define int32 @_9_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_tablescan_part(int8* %trampoline, int8* %state, int8* %localState) [
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
  %Text_cpp_355_ = call bool _ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc (%RelationMappedLogic_cpp_324_, global %12876)
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

declare bool @_ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc(data128 %12932, int8* %12946)

define int32 @_9_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
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

define int32 @_9_join_tablescan_part_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 560
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 22
}

define int32 @_9_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 2, global %2611, i64 0, global %14241, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 23, i32 24, i32 25)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 26)
  return 27
}

define int32 @_9_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_join_tablescan_partsupp(int8* %trampoline, int8* %state, int8* %localState) [
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
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_49, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 608
  %Hash_cpp_265_10 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_375_11 = crc32 i64 5961697176435608501, %Hash_cpp_265_10
  %Hash_cpp_376_12 = crc32 i64 2231409791114444147, %Hash_cpp_265_10
  %Hash_cpp_380_13 = rotr i64 %Hash_cpp_376_12, 32
  %Hash_cpp_380_14 = xor i64 %Hash_cpp_375_11, %Hash_cpp_380_13
  %Hash_cpp_380_15 = mul i64 %Hash_cpp_380_14, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_17 = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_9, %Hash_cpp_380_15)
  %ChainingHashTableLogic_cpp_110_18 = isnotnull ptr %ChainingHashTableLogic_cpp_108_17
  condbr %ChainingHashTableLogic_cpp_110_18 %looploopHashChain19 %loopDoneloopHashChain20

looploopHashChain19:
  %hashEntry21 = phi ptr [%ChainingHashTableLogic_cpp_108_17, %else %ChainingHashTableLogic_cpp_136_, %continueProbe16]
  %ChainingHashTableLogic_cpp_115_22 = getelementptr int8 %hashEntry21, i64 16
  %MaterializationHelper_cpp_230_23 = load int32 %ChainingHashTableLogic_cpp_115_22
  %MaterializationHelper_cpp_233_24 = getelementptr int8 %ChainingHashTableLogic_cpp_115_22, i64 4
  %MaterializationHelper_cpp_230_25 = load data128 %MaterializationHelper_cpp_233_24
  %Integer_cpp_83_27 = cmpeq i32 %RelationMappedLogic_cpp_308_8, %MaterializationHelper_cpp_230_23
  %ConsumerContext_cpp_417_28 = not bool %Integer_cpp_83_27
  condbr %ConsumerContext_cpp_417_28 %continueProbe16 %else29

else29:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_303_30 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 786432
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_30, %localTid
  %Hash_cpp_265_31 = zext i64 %MaterializationHelper_cpp_230_
  %Hash_cpp_265_32 = zext i64 %MaterializationHelper_cpp_230_23
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_32, 32
  %Hash_cpp_269_33 = or i64 %Hash_cpp_265_31, %Hash_cpp_269_
  %Hash_cpp_265_34 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_265_35 = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_269_36 = shl i64 %Hash_cpp_265_35, 32
  %Hash_cpp_269_37 = or i64 %Hash_cpp_265_34, %Hash_cpp_269_36
  %Hash_cpp_375_38 = crc32 i64 5961697176435608501, %Hash_cpp_269_33
  %Hash_cpp_376_39 = crc32 i64 2231409791114444147, %Hash_cpp_269_33
  %Hash_cpp_375_40 = crc32 i64 %Hash_cpp_375_38, %Hash_cpp_269_37
  %Hash_cpp_376_41 = crc32 i64 %Hash_cpp_376_39, %Hash_cpp_269_37
  %Hash_cpp_380_42 = rotr i64 %Hash_cpp_376_41, 32
  %Hash_cpp_380_43 = xor i64 %Hash_cpp_375_40, %Hash_cpp_380_42
  %Hash_cpp_380_44 = mul i64 %Hash_cpp_380_43, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_44, i64 40)
  store int32 %MaterializationHelper_cpp_230_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  store int32 %MaterializationHelper_cpp_230_23, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_150_45 = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 8
  store int32 %RelationMappedLogic_cpp_308_8, %MaterializationHelper_cpp_150_45
  %MaterializationHelper_cpp_150_46 = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 12
  store int32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_150_46
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_25)
  %MaterializationHelper_cpp_150_47 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_150_47
  br %loopDoneloopHashChain20

continueProbe16:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_9, %hashEntry21)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain19 %loopDoneloopHashChain20

loopDoneloopHashChain20:
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_49 = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_50 = isnotnull ptr %ChainingHashTableLogic_cpp_136_49
  condbr %ChainingHashTableLogic_cpp_137_50 %looploopHashChain %loopDoneloopHashChain

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

define int32 @_9_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 752
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 29)
  return 28
}

define int32 @_9_join_join_join_tablescan_partsupp_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 752
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 29
}

define int32 @_9_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 656
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %2611, i64 0, global %19706, i32 6)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 30, i32 31, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 33)
  return 34
}

define int32 @_9_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_303_6 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 524288
  %RelationMappedLogic_cpp_308_7 = load int32 %RelationMappedLogic_cpp_303_6, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 752
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_265_8 = zext i64 %RelationMappedLogic_cpp_308_7
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_8, 32
  %Hash_cpp_269_9 = or i64 %Hash_cpp_265_, %Hash_cpp_269_
  %Hash_cpp_265_10 = zext i64 %RelationMappedLogic_cpp_308_7
  %Hash_cpp_265_11 = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_269_12 = shl i64 %Hash_cpp_265_11, 32
  %Hash_cpp_269_13 = or i64 %Hash_cpp_265_10, %Hash_cpp_269_12
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_269_9
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_269_9
  %Hash_cpp_375_14 = crc32 i64 %Hash_cpp_375_, %Hash_cpp_269_13
  %Hash_cpp_376_15 = crc32 i64 %Hash_cpp_376_, %Hash_cpp_269_13
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_15, 32
  %Hash_cpp_380_16 = xor i64 %Hash_cpp_375_14, %Hash_cpp_380_
  %Hash_cpp_380_17 = mul i64 %Hash_cpp_380_16, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_17)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_18 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_19 = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 8
  %MaterializationHelper_cpp_230_20 = load int32 %MaterializationHelper_cpp_229_19
  %MaterializationHelper_cpp_229_21 = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 12
  %MaterializationHelper_cpp_230_22 = load int32 %MaterializationHelper_cpp_229_21
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 16
  %MaterializationHelper_cpp_230_23 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_24 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_25 = load int64 %MaterializationHelper_cpp_229_24
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %Integer_cpp_83_27 = cmpeq i32 %RelationMappedLogic_cpp_308_7, %MaterializationHelper_cpp_230_18
  %Integer_cpp_83_28 = cmpeq i32 %RelationMappedLogic_cpp_308_7, %MaterializationHelper_cpp_230_20
  %Integer_cpp_83_29 = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_22
  %ConsumerContext_cpp_407_ = and bool %Integer_cpp_83_, %Integer_cpp_83_27
  %ConsumerContext_cpp_407_30 = and bool %Integer_cpp_83_28, %Integer_cpp_83_29
  %ConsumerContext_cpp_407_31 = and bool %ConsumerContext_cpp_407_, %ConsumerContext_cpp_407_30
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_31
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_32 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_33 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1048576
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_33, %localTid
  %RelationMappedLogic_cpp_303_34 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_309_35 = load int64 %RelationMappedLogic_cpp_303_34, %localTid
  %RelationMappedLogic_cpp_303_36 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2097152
  %RelationMappedLogic_cpp_309_37 = load int64 %RelationMappedLogic_cpp_303_36, %localTid
  %Hash_cpp_265_38 = zext i64 %RelationMappedLogic_cpp_308_32
  %Hash_cpp_375_39 = crc32 i64 5961697176435608501, %Hash_cpp_265_38
  %Hash_cpp_376_40 = crc32 i64 2231409791114444147, %Hash_cpp_265_38
  %Hash_cpp_380_41 = rotr i64 %Hash_cpp_376_40, 32
  %Hash_cpp_380_42 = xor i64 %Hash_cpp_375_39, %Hash_cpp_380_41
  %Hash_cpp_380_43 = mul i64 %Hash_cpp_380_42, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_43, i64 52)
  store int32 %RelationMappedLogic_cpp_308_32, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_23)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_150_44 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 24
  store int64 %RelationMappedLogic_cpp_309_35, %MaterializationHelper_cpp_150_44
  %MaterializationHelper_cpp_150_45 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store int64 %RelationMappedLogic_cpp_309_37, %MaterializationHelper_cpp_150_45
  %MaterializationHelper_cpp_150_46 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 40
  store int64 %MaterializationHelper_cpp_230_25, %MaterializationHelper_cpp_150_46
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
  return 33
}

define int32 @_9_planStep23(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 896
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 36)
  return 35
}

define int32 @_9_join_join_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 896
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 36
}

define int32 @_9_planStep24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 800
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 4, global %2611, i64 0, global %25431, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 37, i32 38, i32 39)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 40)
  return 41
}

define int32 @_9_planStep25(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 36)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %25747, int64 %25761)

define int32 @_9_planStep26(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %25917)

define int32 @_9_planStep27(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupby_map_join_tablescan_orders(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  %CompilationContext_cpp_266_ = load object umbra::GlobalStateHeader %state, i32 0, i32 0
  %CompilationContext_cpp_267_ = getelementptr object umbra::Transaction %CompilationContext_cpp_266_, i32 0, i32 2
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 76
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
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 896
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
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_9 = load int64 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_10 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 24
  %MaterializationHelper_cpp_230_11 = load int64 %MaterializationHelper_cpp_229_10
  %MaterializationHelper_cpp_229_12 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_13 = load int64 %MaterializationHelper_cpp_229_12
  %MaterializationHelper_cpp_229_14 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 40
  %MaterializationHelper_cpp_230_15 = load int64 %MaterializationHelper_cpp_229_14
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else

else:
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_193_ = call i32 _ZN5umbra11DateRuntime11extractYearEj (%RelationMappedLogic_cpp_310_)
  br %cont

cont:
  %Numeric_cpp_763_ = checkedssub i64 100, %MaterializationHelper_cpp_230_13 %cont17 %overflow

cont17:
  %BigNumeric_cpp_863_ = ashr i64 %MaterializationHelper_cpp_230_11, 63
  %BigNumeric_cpp_863_18 = builddata128 d128 %MaterializationHelper_cpp_230_11 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_19 = ashr i64 %Numeric_cpp_763_, 63
  %BigNumeric_cpp_863_20 = builddata128 d128 %Numeric_cpp_763_ %BigNumeric_cpp_863_19
  %Numeric_cpp_698_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_18, %BigNumeric_cpp_863_20)
  %BigNumeric_cpp_863_21 = ashr i64 %MaterializationHelper_cpp_230_15, 63
  %BigNumeric_cpp_863_22 = builddata128 d128 %MaterializationHelper_cpp_230_15 %BigNumeric_cpp_863_21
  %BigNumeric_cpp_863_23 = ashr i64 %MaterializationHelper_cpp_230_9, 63
  %BigNumeric_cpp_863_24 = builddata128 d128 %MaterializationHelper_cpp_230_9 %BigNumeric_cpp_863_23
  %Numeric_cpp_698_25 = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_22, %BigNumeric_cpp_863_24)
  %BigNumeric_cpp_675_ = call d128 _ZN5umbra17BigNumericRuntime7subTrapENS_9data128_tES1_ (%Numeric_cpp_698_, %Numeric_cpp_698_25)
  %Hash_cpp_265_26 = zext i64 %Date_cpp_193_
  %Hash_cpp_375_27 = crc32 i64 5961697176435608501, %Hash_cpp_265_26
  %Hash_cpp_376_28 = crc32 i64 2231409791114444147, %Hash_cpp_265_26
  %Hash_cpp_380_29 = rotr i64 %Hash_cpp_376_28, 32
  %Hash_cpp_380_30 = xor i64 %Hash_cpp_375_27, %Hash_cpp_380_29
  %Hash_cpp_380_31 = mul i64 %Hash_cpp_380_30, 2685821657736338717
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_8, %Hash_cpp_380_31)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_383_, 1023
  %PreaggregationLogic_cpp_20_32 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_32, i32 0, i32 0
  %PreaggregationLogic_cpp_25_33 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_383_
  condbr %PreaggregationLogic_cpp_25_33 %then %else34

then:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_383_)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%PreaggregationLogic_cpp_29_, %MaterializationHelper_cpp_230_8)
  %MaterializationHelper_cpp_983_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 16
  store int32 %Date_cpp_193_, %MaterializationHelper_cpp_983_
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 20
  store data128 %BigNumeric_cpp_675_, %GroupByTranslator_cpp_207_
  br %cont48

else34:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_32, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_36_
  %MaterializationHelper_cpp_876_35 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  %MaterializationHelper_cpp_876_36 = load int32 %MaterializationHelper_cpp_876_35
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_230_8
  %Char_cpp_113_37 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_37
  condbr %Char_cpp_114_ %then38 %cont44

then38:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_39 = extractdata128 i64 %MaterializationHelper_cpp_230_8
  %Char_cpp_115_40 = cmpeq i64 %Char_cpp_115_39, %Char_cpp_115_
  condbr %Char_cpp_115_40 %then41 %else42

then41:
  br %cont43

else42:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_8, %MaterializationHelper_cpp_876_)
  br %cont43

cont43:
  %30422 = phi bool [bool true, %then41 %Char_cpp_118_, %else42]
  br %cont44

cont44:
  %30465 = phi bool [%30422, %cont43 bool false, %else34]
  %Integer_cpp_83_45 = cmpeq i32 %Date_cpp_193_, %MaterializationHelper_cpp_876_36
  %ConsumerContext_cpp_407_ = and bool %30465, %Integer_cpp_83_45
  %ConsumerContext_cpp_417_46 = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_46 %then %else47

else47:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 20
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_217_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_, %BigNumeric_cpp_675_)
  store data128 %BigNumeric_cpp_688_, %GroupByTranslator_cpp_217_
  br %cont48

cont48:
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_49 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_49 %cancellation %continueProbe

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
  return 40

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

declare int32 @_ZN5umbra11DateRuntime11extractYearEj(int32 %28503)

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

declare data128 @_ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_(data128 %28788, data128 %28802)

declare data128 @_ZN5umbra17BigNumericRuntime7subTrapENS_9data128_tES1_(data128 %29040, data128 %29054)

declare int64 @_ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm(data128 %29286, int64 %29300)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %29672, int64 %29686)

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %30348, data128 %30362)

declare data128 @_ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_(data128 %30715, data128 %30729)

declare void @_ZN5umbra16RuntimeFunctions20checkForCancellationEv()

define int32 @_9_planStep28(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 944
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 43)
  return 42
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %31575, int8* %31589, int64 %31603)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %31694, int8* %31708)

define int32 @_9_groupby_map_join_tablescan_orders_extra(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_876_ = load data128 %GroupByTranslator_cpp_112_
  %MaterializationHelper_cpp_876_2 = getelementptr int8 %GroupByTranslator_cpp_112_, i64 16
  %MaterializationHelper_cpp_876_3 = load int32 %MaterializationHelper_cpp_876_2
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_4 = load data128 %GroupByTranslator_cpp_113_
  %MaterializationHelper_cpp_876_5 = getelementptr int8 %GroupByTranslator_cpp_113_, i64 16
  %MaterializationHelper_cpp_876_6 = load int32 %MaterializationHelper_cpp_876_5
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_113_7 = extractdata128 i64 %MaterializationHelper_cpp_876_4
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_7
  condbr %Char_cpp_114_ %then8 %cont12

then8:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_4
  %Char_cpp_115_9 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_10 = cmpeq i64 %Char_cpp_115_9, %Char_cpp_115_
  condbr %Char_cpp_115_10 %then11 %else

then11:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_4)
  br %cont

cont:
  %33448 = phi bool [bool true, %then11 %Char_cpp_118_, %else]
  br %cont12

cont12:
  %33484 = phi bool [%33448, %cont bool false, %then]
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_3, %MaterializationHelper_cpp_876_6
  %ConsumerContext_cpp_407_ = and bool %33484, %Integer_cpp_83_
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %noMatch %else13

else13:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 36
  %GroupByTranslator_cpp_121_14 = getelementptr int8 %chainEntry, i64 36
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_121_14
  %MaterializationHelper_cpp_977_15 = load data128 %GroupByTranslator_cpp_121_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_977_15)
  store data128 %BigNumeric_cpp_688_, %GroupByTranslator_cpp_121_14
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_16 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_16, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 52
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
  return 43
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %32054)

define int32 @_9_planStep29(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 944
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 44, i32 45, i32 46)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 47)
  return 48
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %34682, int8* %34696)

define int32 @_9_planStep30(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %2254)
  return 0
}

define int32 @_9_planStep31(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %35062)

define int32 @_9_planStep32(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
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
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_140_
  %MaterializationHelper_cpp_876_1 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 16
  %MaterializationHelper_cpp_876_2 = load int32 %MaterializationHelper_cpp_876_1
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 20
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_248_
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_310_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 36)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%SortTranslator_cpp_310_, %MaterializationHelper_cpp_876_)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %SortTranslator_cpp_310_, i64 16
  store int32 %MaterializationHelper_cpp_876_2, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_310_, i64 20
  store data128 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_161_
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
  return 47
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %35976, int64 %35990)

define int32 @_9_planStep33(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 50)
  return 49
}

define int32 @_9_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25536
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 50
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %36820)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %36902, object umbra::SortOperator* %36916)

define int32 @_9_planStep34(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25536
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %37060)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 25536
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 52)
  return 51
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %37144, int8* %37158, int8* %37172)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %37313, object umbra::SortOperator* %37327)

define int32 @_9_sort_groupby_extra35(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25536
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %37060, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 52
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %37577, int8* %37591, int8* %37605, int32 %37619)

define int32 @_9_planStep36(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25536
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 53, i32 54, i32 55)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 56)
  return 57
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %37871, object umbra::SortOperator* %37885, bool %37899)

define int32 @_9_planStep37(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep38(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep39(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_229_ = getelementptr int8 %CodeGen_hpp_1103_, i64 16
  %MaterializationHelper_cpp_230_1 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 20
  %MaterializationHelper_cpp_230_2 = load data128 %MaterializationHelper_cpp_233_
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
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x563385cce7c0, i64 720575940798709760, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %39273, i32 1)
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x563385cce7c0, i64 288230376151711744, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %39273, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x563385cce7c0, i64 504403158701704192, %MaterializationHelper_cpp_230_2)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 56
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %39064, int8 %39078)

declare void @_ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %39205, int64 %39219, data128 %39233)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %39295, int32 %39309)

declare void @_ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi(object umbra::OutputTarget* %39359, int64 %39373, int32 %39387)

declare void @_ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %39463, int64 %39477, data128 %39491)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %39567)

define int32 @_9_planStep40(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_9_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
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
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 656
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 752
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_7)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 800
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_8)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 896
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_9)
  %CompilationContext_cpp_214_10 = getelementptr int8 %state, i64 944
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_10)
  %CompilationContext_cpp_214_11 = getelementptr int8 %state, i64 25536
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_11)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %39989)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %40141)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %40777)
`;
